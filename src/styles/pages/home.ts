import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    width: '100%',
    marginLeft: 'auto',
    minHeight: 656,
})

export const Product = styled('main', {
    background: 'linear-gradient(100deg,#1ea483 0%,#7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    img: {
        objectFit: 'cover'
    },

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',
        overflow: 'hidden',
        borderRadius: 6,
        display: 'flex',
        justifyContent: "space-between",
        backgroundColor: 'rgba(0, 0 ,0 ,0.6)',
        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',


        div: {
            display: 'flex',
            flexDirection: 'column'

        },

        button: {
            backgroundColor: '$green500',
            padding: '0.75rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',

            '&:hover': {
                backgroundColor: '$green300',
            },
        },

        strong: {
            fontSize: '$lg',
            color: '$gray100',

        },

        span: {
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300',
            whiteSpace: 'nowrap'
        },

    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,

        }
    }
})

