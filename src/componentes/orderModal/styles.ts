import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../styles';

export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0 ,0 , 0.75)'

})

export const Content = styled(Dialog.Content, {
    padding: '1.5rem 3rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$gray800',
    width: '30rem',
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    transform: 'translateX(0%)',
    opacity: 1,
    transition: 'all 0.2s ease-in-out',

    '.quantity': {
        span: {
            fontFDamily: 'Roboto',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '160%',
        }
    }
})

export const CloseButton = styled(Dialog.Close, {
    display: 'flex',
    justifyContent: 'end',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
})

export const TitleModal = styled(Dialog.Title, {
    marginBottom: '2rem',
    fontFamily: 'Roboto',
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: '160%',
})