import Navbar from '@/Components/Navbar'
import { Head, useForm } from '@inertiajs/react'
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Create({ auth }) {

  const [isChecked, setisChecked] = useState(null)
  const { setData, post, error, processing } = useForm({
    title: "",
    content: "",
    user_id: auth.user.id,
    thumbnail: "",
    publish: false,
  })

  const handleChangechk = (event) => {
    const newValue = event.target.checked;
    console.log('is checked', newValue)
    setisChecked(newValue);
  };

  const handleChange = (e) => {
    console.log('handlechange', e.target.name)
    setData(e.target.name, e.target.type === "file" ? e.target.files[0] : e.target.type === "checkbox" ? e.target.checked : e.target.value)
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('posted', e)
    post(route('storePost'))
  }


  return (
    <>
      <Head title="Detail" />
      <Navbar auth={auth} />
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <div className='list-blog mb-6 '>
          <h2 className='text-2xl font-semibold mb-6 text-center'>
            Create a new post
          </h2>

          <div className='max-w-xl mx-auto'>
            <form onSubmit={submit} className=''>
              <div className="form-control mb-6">
                <label htmlFor="title" className='text-lg font-normal mb-2'>Title</label>
                <input type="text" id='title' name='title' onChange={(e) => handleChange(e)} placeholder="Add title here" className="input input-bordered input-primary w-full max-w-xl" />
              </div>
              <div className="form-control mb-6">
                <label htmlFor="content" className='text-lg font-normal mb-2'>Content</label>
                <textarea name="content" id='content' className="textarea textarea-primary h-48" onChange={(e) => handleChange(e)} placeholder="type content here"></textarea>

                {/* <CKEditor
                  editor={ClassicEditor}
                  data=""
                  onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                      writer.setStyle(
                        "height",
                        "200px",
                        editor.editing.view.document.getRoot()
                      );
                    });
                  }}
                  onChange={(e, editor) => handleChange(e, editor.getData())}
                /> */}
              </div>
              <div className="form-control mb-6">
                <label htmlFor="thumbnail" className='text-lg font-normal mb-2'>Thumbnail</label>
                <input type="file" name='thumbnail' id='thumbnail' onChange={(e) => handleChange(e)} className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs" />
              </div>
              <div className="form-control w-52 mb-6">
                <label className="cursor-pointer label">
                  <span className="label-text text-lg font-normal mb-2">Publish</span>
                  <input type="checkbox" name='publish' id='publish' onChange={(e) => handleChange(e)} className="toggle toggle-primary " />
                </label>
              </div>
              <div className="form-control">
                <button type="submit" className='btn btn-primary btn-md'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
