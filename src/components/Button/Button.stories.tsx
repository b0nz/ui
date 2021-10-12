import React, { useRef, useState } from 'react'

import { Button } from './../../index'

export default {
  title: 'Button',
  component: Button,
}

export const Default = (args: any) => <Button {...args}>Button text</Button>
export const withStyles = (args: any) => <Button {...args}>Button text</Button>
export const withBlock = (args: any) => <Button {...args}>Button text</Button>
export const withLoading = (args: any) => (
  <Button {...args}>Loading</Button>
)
export const WithRef = () => {
  const buttonRef = useRef<any>(null)
  const [msg, setMsg] = useState('Click button to console.log Ref')

  function onClick() {
    const message = `container: ${buttonRef?.current.container} button:${buttonRef?.current.button}  `
    setMsg(message)
    console.log(message)
  }

  return (
    <>
      <Button ref={buttonRef} onClick={onClick}>
        Button with forwardRef
      </Button>

      <p style={{ color: '#666666' }}>{msg}</p>
    </>
  )
}

export const allButtons = (args: any) => (
  <>
    <div>
      <Button {...args}>
        Button Primary
      </Button>
      <Button {...args} type="secondary">
        Button Secondary
      </Button>
      <Button {...args} type="default">
        Button Default
      </Button>
      <Button {...args} type="link">
        Button Link
      </Button>
      <Button {...args} type="outline">
        Button Outline
      </Button>
      <Button {...args} type="danger">
        Button Danger
      </Button>
      <Button {...args} type="disactive">
        Button Disactive
      </Button>
    </div>
  </>
)

export const withCustomTag = (args: any) => (
  <Button {...args}>Button text</Button>
)

withStyles.args = {
  type: 'primary',
  style: { backgroundColor: 'red', color: 'yellow' },
}

withBlock.args = {
  type: 'primary',
  block: true,
}

withLoading.args = {
  loading: true,
}

allButtons.args = {
  loading: false,
}

withCustomTag.args = {
  as: 'span',
}