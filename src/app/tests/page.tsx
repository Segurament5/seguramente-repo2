"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card/Card'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Label } from '@/components/ui/label/Label'

const questions = [
  {
    id: 1,
    question: "¿Con qué frecuencia te sientes estresado?",
    options: ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"]
  },
  {
    id: 2,
    question: "¿Cómo describirías tu nivel de satisfacción con la vida?",
    options: ["Muy insatisfecho", "Insatisfecho", "Neutral", "Satisfecho", "Muy satisfecho"]
  },
  // Añade más preguntas aquí
]

export default function TestsPsicologicos() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Test de Bienestar Psicológico</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>{questions[currentQuestion].question}</CardTitle>
          <CardDescription>Pregunta {currentQuestion + 1} de {questions.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup onValueChange={handleAnswer} value={answers[currentQuestion]}>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={prevQuestion} disabled={currentQuestion === 0}>Anterior</Button>
          <Button onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
            {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}