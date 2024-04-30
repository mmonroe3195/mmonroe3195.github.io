import Link from "next/link";

export default function HowToFightClimateChange() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 w-10/12 m-auto">
      <div className="text-center">
        <div className="pb-5 font-bold text-xl font-bold">
          It often feels difficult to know what to do to address climate change. 
          Climate change is a very large issue, and it simply cannot be solved overnight.
          This section is intended to provide resources to guide future courses of action.

          1. Learn More 
          Learning about climate change is one of the best places to start. Gaining a better understanding
          of the science gives you the tools know how to take action. Additionally, by learning more about
          climate change, you are equipt to teach others about what is really happening to our climate. Misinformation
          is a powerful tool of climate change deniers and learning what is really happening is a good way to 
          fight these climate lies.

          Websites: 
          Classes:

          2. Take action:
          There are many different ways to take action against climate change. Here is an article that I really
          like that suggests how to guide action.
          <Link href="https://www.nytimes.com/2020/01/10/opinion/sunday/how-to-help-climate-change.html">https://www.nytimes.com/2020/01/10/opinion/sunday/how-to-help-climate-change.html</Link>
          2. 
        </div>
      </div>
    </div>
  );
}
