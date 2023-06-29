/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styles from './PostBody.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { BiCopy } from 'react-icons/bi'

export default function PostBody({ content }) {
  const serializers = {
    types: {
      code: ({ value }: any) => (
        <div className="my-2" key={value.key}>
          <div className="flex h-8 items-center justify-between bg-neutral-950 px-1 text-white">
            <span>{value.language || "text"}</span>
            <CopyToClipboard
              text={value.code}
              onCopy={() => alert('udah disalin bang')}
            >
              <BiCopy className='cursor-pointer'/>
            </CopyToClipboard>
          </div>
          <SyntaxHighlighter language={value.language}>
            {value.code}
          </SyntaxHighlighter>
        </div>
      ),
    },
  }

  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={serializers} />
    </div>
  )
}
