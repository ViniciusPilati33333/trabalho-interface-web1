import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"

export function App() {
  return (
    <>
    <div className="grid w-full max-w-sm items-center gap-1.5 justify-center">
      <div className="flex gap-3">
        <div>
          <Label>First name</Label>
          <Input />
        </div>

        <div>
          <Label>Last name</Label>
          <Input />
        </div>
      </div>



      <Label>Company Name(Optional)</Label>
      <Input />

      <Label>Country / Region</Label>
      <Input />

      <Label>Street Adress</Label>
      <Input />

       <Label>Town City</Label>
      <Input />

       <Label>Province</Label>
      <Input />

       <Label>Zip Code</Label>
      <Input />

       <Label>Phone</Label>
      <Input />

       <Label>Email Adress</Label>
      <Input />

      <Input placeholder="Aditional information"/>
      </div>
    </>
  )
}

