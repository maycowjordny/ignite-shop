import * as Dialog from '@radix-ui/react-dialog';
import { keyframes, styled } from '../../styles';

export const animationModal = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '50%': { transform: 'translateX(50%)' },
    '100%': { transform: 'translateX(0%)' },
});

export const Overlay = styled(Dialog.Overlay, {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0 ,0 , 0.75)'

})

export const Content = styled(Dialog.Content, {
    padding: '0rem 1rem 3rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '$gray800',
    width: '30rem',
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    opacity: 1,
    animation: `${animationModal}  ease-in-out 0.2s`,

    '.scroll': {
        overflow: 'auto'
    },

    "*": {
        scrollbarWidth: "auto",
        scrollbarColor: "$gray300 $gray800",
    },

    "*::-webkit-scrollbar": {
        width: "1rem",
    },

    "*::-webkit-scrollbar-track": {
        background: "$gray800",
    },

    "*::-webkit-scrollbar-thumb": {
        backgroundColor: "$gray300",
        borderRadius: "10px",
        border: "3px solid $gray800",
    },

    '.orderWrapper': {
        display: 'flex',
        flexDirection: 'column',
    },

    '.quantity': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Roboto',

        fontWeight: 400,
        lineHeight: '160%',

        p: {
            color: '$gray300',
            marginBottom: '0.44rem',
            fontSize: '1rem',
        },

        span: {
            fontSize: '1.25rem',
            color: '$gray200'
        }

    },

    '.totalAmount': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        fontFamily: 'Roboto',
        lineHeight: '160%',
        color: '$gray200',

        span: {
            fontSize: '1.125rem',
            fontWeight: 700,
        },

        strong: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: '140%',
        },

    },

    '#buttonPayment': {
        marginTop: '3.6rem',
        padding: '1.25rem 2rem',
        borderRadius: '0.5rem',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: '$green500',

        color: '$white',
        fontFamily: 'Roboto',
        lineHeight: '160%',
        fontSize: '1.125rem',
        fontWeight: 700,

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed'
        },

        '&:not(:disable):hover': {
            backgroundColor: '$green300',
        }

    }
})

export const CloseButton = styled(Dialog.Close, {
    width: '100%',
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