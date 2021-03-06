import { BaseModal, Overlay } from './styled'
import { inject, observer } from 'mobx-react'

import React from 'react'
import { compose } from 'recompose'

export const Modal = compose(
	inject((stores, { name }) => ({
		isOpen: stores[name].isOpen,
	})),
	observer,
)(
	({ isOpen, ...rest }) => isOpen && (
		<Overlay>
			<BaseModal {...rest} />
		</Overlay>
	)
)
