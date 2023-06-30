import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Login() {
  return (
    <div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <h2>Please login to continue</h2>
      <Input type="email" id="email" placeholder="Email" />

      <Input type="password" id="password" placeholder="Password" />

      <Button>Login</Button>
    </div></div>
  )
}

