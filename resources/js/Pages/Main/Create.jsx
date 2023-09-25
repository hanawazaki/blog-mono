import { useForm } from '@inertiajs/react'

export default function Create({ auth }) {

  const { setData, post, error, processing } = useForm({
    title: "",
    content: "",
    thumbnail: "",
    publish: true,
  })

  const onHandleChange = (e) => {
    setData(e.target.title, e.target.content, e.target.publish, e.target.type === "file" ? e.target.files[0] : e.target.value)
  }

  const submit = (e) => {
    e.prevent.default()
    console.log('posted')
    // post(route(''))
  }

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <div className='list-blog mb-6 flex gap-8'>
          <h2 className='text-2xl font-semibold mb-6'>
            Create a new post
          </h2>
          <form onSubmit={submit} className=''>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

          </form>
        </div>
      </div>
    </>
  )
}
