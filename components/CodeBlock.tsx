const CodeBlock = ({ data }) => {
  const code = data.code
  const filename = data.filename
  const language = data.language

  return (
    <div>
      <div className="flex justify-between ">
        <p className="opacity-70">{filename}</p>
        <p>
          language: <span className="opacity-70">{language}</span>
        </p>
      </div>
      <pre className="p-2">
        <code>{code}</code>
      </pre>
    </div>
  )
}
export default CodeBlock
