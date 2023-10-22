import { useEffect } from 'react'

function useSEO({
  title = 'Prueba técnica junior, trainee', description = 'Modificando una lista con React y Typescript'
}: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}

export default useSEO