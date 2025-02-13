import { NextResponse } from 'next/server'

const works = [
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    title: 'math porblen',
    description: 'solve 1+1',
    createdAt: '2025-02-13',
    dueAt: '2025-02-18',
  },
  {
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    title: 'math porblen 2',
    description: 'description',
    createdAt: '2025-02-14',
    dueAt: '2025-02-17',
  },
]

export async function GET() {
  return NextResponse.json(works)
}
