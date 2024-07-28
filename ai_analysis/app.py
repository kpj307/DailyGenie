from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)
nlp = pipeline('sentiment-analysis')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    result = nlp(data['description'])
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5001)
