export default function GetInTouch() {
  return (
    <div className="flex h-screen w-screen flex-col flex-nowrap items-center justify-center">
      <h3 className="txt-head2 text-center">Say Somthing ...</h3>
      <p className="txt-body mt-2 text-center">
        If you want to tell me something, ask a question, or hire me, fill out
        this form and I will get in touch with you.
        <br />( You can use markdown )
      </p>
      <a
        href="mailto:dev.shahryar@gmail.com"
        className="my-10 rounded-lg bg-primary px-10 py-5 text-center text-head "
      >
        GetInTouch
      </a>
    </div>
  )
}
