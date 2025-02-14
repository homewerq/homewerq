'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'

export default function SigninPage() {
  const [id, setID] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(id, password)
  }

  return (
    <div className="relative h-full">
      <Card className="max-sm:bg-none max-sm:shadow-none max-sm:border-none w-full sm:w-[350px] sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
        <CardHeader>
          <CardTitle>登录</CardTitle>
          <CardDescription>以管理您的作业。</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">ID</Label>
                <Input
                  id="id"
                  placeholder="学号/电子邮箱"
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">
              登录
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
