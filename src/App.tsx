import { Header } from "@/components/header"
import { Button } from "./components/ui/button"
import { Mail } from "lucide-react"
import { Switch } from "@/components/ui/switch"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const FormSchema = z.object({
  airplane: z.boolean(),
  username: z.string().min(2, {
    message: "Имя пользователя должно состоять не менее чем из 2 символов.",
  }),
})

function App() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      airplane: true,
      username: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div>
      <Header />
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Switch />

      <Form { ...form }>
        <form action="" onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField 
            control={form.control}
            name='airplane'
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-beetwen rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Email
                  </FormLabel>
                  <FormDescription>
                    Some description
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      
    </div>
  )
}

export default App
