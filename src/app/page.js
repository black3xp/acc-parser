'use client'
import React, { useState } from 'react'

export default function HomePage() {
  const [file, setFile] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault();
    if (!file) return;
    
    const form = new FormData();
    form.set('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: form
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    // crear formulario para subir archivos
    <>
      <h1>Subir archivos</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file"
          onChange={event => {
            setFile(event.target.files[0])
          }}
        />
        <button type="submit">Subir</button>
      </form>
    </>
  )
}
