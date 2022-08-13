import { Card } from './Card'
import { FC, useEffect, useState } from 'react'
import { StudentIntro } from '../models/StudentIntro'

export const StudentIntroList: FC = () => {
  const [studentIntros, setStudentIntros] = useState<StudentIntro[]>([])

  useEffect(() => {
    setStudentIntros(StudentIntro.mocks)
  }, [])

  return (
    <div>
      {
        studentIntros.map((studentIntro, i) => <Card key={i} studentIntro={studentIntro} />)
      }
    </div>
  )
}
