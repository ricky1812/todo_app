from flask import Flask
from flask import render_template, redirect, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todolist.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)


class Todo(db.Model):
	id=db.Column(db.Integer, primary_key=True, nullable=False)
	task=db.Column(db.Text, nullable=False)
	date_time=db.Column(db.DateTime, unique=True)

	def __repr__(self):
		return f"User('{self.id},{self.task}')"

db.drop_all()
db.create_all()



@app.route('/', methods=["GET","POST"])
def home():
	if request.form:
		print(request.form)
		date_string=request.form.get("datetime")
		date_object = datetime.strptime(date_string, "%m/%d/%Y %H:%M %p")
		td=Todo(task=request.form.get("task"),date_time=date_object)
		datetime_list=Todo(date_time=date_object)
		db.session.add(td)
		db.session.commit()
	tasks=Todo.query.all()


	return render_template('homepage.html',tasks=tasks)

@app.route('/update',methods=["GET","POST"])
def update():
	newtask = request.form.get("newtask")
	oldtask=request.form.get("oldtask")
	tasklist=Todo.query.filter_by(task=oldtask).first()
	tasklist.task=newtask
	date_string1=request.form.get("newdate")
	date_string2=request.form.get("olddate")
	newdate=datetime.strptime(date_string1, "%Y-%m-%d %H:%M:%S")
	olddate=datetime.strptime(date_string2, "%Y-%m-%d %H:%M:%S")
	datetime_list=Todo.query.filter_by(date_time=olddate).first()
	datetime_list.date_time=newdate
	db.session.commit()
	return redirect("/")
   


@app.route("/delete", methods=["GET","POST"])
def delete():
	task=request.form.get("task")
	tasklist=Todo.query.filter_by(task=task).first()
	db.session.delete(tasklist)
	db.session.commit()
	return redirect("/")

@app.route("/tasklist")
def display():
	tasks=Todo.query.all()
	return render_template('tasklist.html',tasks=tasks)



if __name__=="__main__":
	debug=True