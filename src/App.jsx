
import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [post, setPost] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) {
      return;
    }

    if (editIndex !== null) {
      const updatedPosts = [...post];

      updatedPosts[editIndex] = {
        title: title,
        desc: desc,
      };

      setPost(updatedPosts);
      setEditIndex(null);
    } else {
      const newPost = {
        title: title,
        desc: desc,
      };

      setPost([...post, newPost]);
    }

    setTitle("");
    setDesc("");
  }

  function handleEdit(index) {
    setTitle(post[index].title);
    setDesc(post[index].desc);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const updatedPosts = post.filter((_, i) => i !== index);

    setPost(updatedPosts);

    if (editIndex === index) {
      setEditIndex(null);
      setTitle("");
      setDesc("");
    }
  }

  function handleCancel() {
    setEditIndex(null);
    setTitle("");
    setDesc("");
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-purple-950 px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        { }

        <div className="mb-10 text-center">

          <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            ✨ Simple Notes Manager
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Create Your{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Notes
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Create, edit and delete your notes with a clean and modern
            interface.
          </p>

        </div>
        { }

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          { }
          <div className="w-full lg:w-[35%]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-7 lg:sticky lg:top-8">
              {/* Form Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-2xl shadow-lg shadow-blue-500/20">
                ✍️
              </div>
              { }
              <h2 className="text-2xl font-bold text-white">
                {editIndex !== null ? "Edit Notes" : "Create Notes"}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {editIndex !== null
                  ? "Update your note information."
                  : "Write something and share it."}
              </p>
              { }
              <form
                onSubmit={handleSubmit}
                className="mt-7 flex flex-col gap-5" >
                {/* Title */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Note Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                { }
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Description
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Write something..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 transition duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" />
                </div>
                { }
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-blue-600 hover:to-purple-700 hover:shadow-purple-500/30" >
                    {editIndex !== null ? "Update Note" : "Add Note"}
                  </button>
                  {editIndex !== null && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-semibold text-slate-300 transition duration-300 hover:bg-white/10 hover:text-white">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          { }
          <div className="w-full lg:w-[65%]">
            { }
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Notes                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Your created notes appear here.
                </p>
              </div>
              <div className="flex h-11 min-w-11 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 font-bold text-blue-300">
                {post.length}
              </div>

            </div>
            { }
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {post.length === 0 ? (
                <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-14 text-center shadow-xl backdrop-blur-xl sm:col-span-2">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500/20 to-purple-500/20 text-3xl">
                    📝
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    No Notes Yet
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Create your first note from the form.
                  </p>
                </div>
              ) : (
                post.map((elem, ids) => (
                  <div
                    key={ids}
                    className="group flex min-h-60 flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-blue-950/40">
                    { }
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                        Post #{ids + 1}
                      </span>
                      <span className="text-lg">
                        ✨
                      </span>
                    </div>
                    { }
                    <h3 className="mb-3 break-words text-xl font-bold text-white">
                      {elem.title}
                    </h3>
                    { }
                    <p className="flex-1 break-words text-sm leading-7 text-slate-300">
                      {elem.desc}
                    </p>
                    { }
                    <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
                      <button
                        onClick={() => handleEdit(ids)}
                        className="flex-1 rounded-xl border border-jblue-400/20 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition duration-300 hover:bg-blue-500 hover:text-white">
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ids)}
                        className="flex-1 rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-300 transition duration-300 hover:bg-purple-600 hover:text-white" >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
