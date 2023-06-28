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

import styles from './PostBody.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'

export default function PostBody({ content }) {
  const serializers = {
    types: {
      code: ({ value }: any) => (
        <div className="my-2" key={value.key}>
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
