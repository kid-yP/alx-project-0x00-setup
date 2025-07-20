import Card from "@/components/Card"

import Button from "@/components/Button";
const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="Small Rounded-Sm" styles="rounded-sm text-sm" />
        <Button title="Medium Rounded-Sm" styles="rounded-sm text-base" />
        <Button title="Large Rounded-Md" styles="rounded-md text-lg px-6 py-3" />



      </div>
    )
  }
  export default Landing