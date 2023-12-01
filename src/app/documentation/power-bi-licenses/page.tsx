export default function PowerBILicenses() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-10/12 m-auto">
      <h2 id="license-overview" className="text-2xl">
        Power BI License Overview
      </h2>
      <br />
      <p>
        For the duration of this project, we utilized a free license. However,{" "}
        <a href="https://powerbi.microsoft.com/en-us/pricing/">
          different licenses
        </a>{" "}
        exist. These include Power BI Pro and Power BI Premium. We were limited
        in regards to what we could do during the project because we did not
        have a budget. Below are
        some recommendations for the future of the project there was budget in
        the future. Note: Power BI has{" "}
        <a href="https://www.microsoft.com/en-us/nonprofits/power-bi">
          separate pricing for non-profits
        </a>
        .
      </p>
      <h2 id="limitations" className="text-2xl">
        Limitations
      </h2>
      <br />
      <p>
        We were most limited in this project by our free license because it
        meant that we could not work with the{" "}
        <a href="https://learn.microsoft.com/en-us/rest/api/power-bi/">
          APIs from Power BI
        </a>{" "}
        and{" "}
        <a href="https://learn.microsoft.com/en-us/power-bi/developer/embedded/">
          Power BI Embedded Analytics
        </a>
        .{" "}
      </p>
      <h2 id="microsoft-developer-account" className="text-2xl">
        Microsoft Developer Account
      </h2>
      <br />
      <p>
        One way around this licensing constraint is to create a{" "}
        <a href="https://developer.microsoft.com/en-us/microsoft-365/dev-program">
          Microsoft Developer Account
        </a>
        . This is something that we considered utilizing. We even set up a
        developer account, but later decided against this since according to the{" "}
        <a href="https://learn.microsoft.com/en-us/office/developer-program/microsoft-365-developer-program-faq">
          Microsoft 365 Developer Program FAQ Section:
        </a>{" "}
        &quot;Your subscription is good for 90 days and is renewable based on
        valid developer activity. If you&#39;re using your subscription for
        development, it will be renewed regularly.&quot; The requirement of
        consistently having valid developer activity ultimately was the reason
        we decided to forgo this option. We knew that there would be valid
        developer activity during the Fall 2023 Semester, but understood that
        after our thesis semester was complete there might not be enough valid
        developer activity. We did not want our clients to lose access to our
        work when our developer account stopped being renewed so we ultimately
        chose another method of completing the project. However, if developer
        activity were to be resumed in the future, utilizing a developer account
        could be a viable option.
      </p>
    </main>
  );
}
