import Link from "next/link";

export default function HowToFightClimateChange() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-10/12 m-auto">
      <div className="text-center">
        <div className="pb-5 text-lg">
        <h2 className="text-xl font-bold">Address Climate Change:</h2>
          It often feels difficult to know what to do to address climate change. 
          Climate change is a very large issue, and it simply cannot be solved overnight.
          This section is intended to provide resources to guide future courses of action.
          <br/> <br/> <br/>
          <h2 className="text-xl font-bold">1. Learn More:</h2>
          Learning about climate change is one of the best places to start. Gaining a better understanding
          of the science gives you the tools necessary to act. Additionally, by learning more about
          climate change, you are equipt to teach others about what is really happening to Earth. Misinformation
          is a powerful tool of climate change deniers and learning what is really happening is a good way to 
          fight these climate lies.
          <br/> <br/>

          If you are a Hamilton student, consider taking classes in the <Link className ="font-medium text-blue-600 dark:text-blue-500 hover:underline"href="https://www.hamilton.edu/academics/departments/environmental-studies">environmental studies department</Link> like climate change.
          <br/> <br/> <br/>
          <h2 className="text-xl font-bold">2. Take Action:</h2>
          There are many different ways to take action against climate change. Here is an article that I really
          like that suggests how to guide action. <br/>
          <Link className ="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.nytimes.com/2020/01/10/opinion/sunday/how-to-help-climate-change.html">https://www.nytimes.com/2020/01/10/opinion/sunday/how-to-help-climate-change.html</Link> <br/>
        </div>
      </div>
    </div>
  );
}
