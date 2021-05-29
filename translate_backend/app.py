from flask import Flask,request,jsonify
from googletrans import Translator
from flask_cors import CORS, cross_origin
translator = Translator()
app = Flask(__name__)

CORS(app)

@app.route('/translate',methods=['POST'])
def translate():
     data=request.get_json()
     text = data['text']
     lang = data['lan']
     out = translator.translate(text, dest=lang)
     return jsonify({"output":out.text})

@app.route('/')
def index():
    return "<h1>Welcome to our server !!</h1>"

if __name__== '__main__':
    print("The App is running .")
    app.run(threaded=True, port=5000)