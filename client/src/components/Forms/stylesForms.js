import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    container: {
        margin: 0,
        padding: 0
    },
    bg: {
        position: 'relative',
        width: '100vw',
        height: '98vh',
        filter: 'blur(5px)'
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'right',
        marginBottom: 10
    },
    caja: {
        display: 'flex',
        width: 920,
        margin: 'auto',
        borderRadius: 7,
        overflow: 'hidden',
        position: 'absolute',
        top: '10%',
        left: '15%',
        boxShadow: '0 10px 10px rgb(0, 0, 0, .40)'
    },
    caja2: {
        display: 'flex',
        backgroundColor: '#fff'

    },
    boxImg: {
        width: 350,
        height: '100%',
        backgroundPosition: 'center',
    },
    boxForm: {
        textAlign: 'center',
        width: '100%',
    },

    miniBox: {
        height: 55
    },
    input: {
        width: 250,
        outline: 'none',
        height: 30,
        paddingLeft: 5,
        marginBottom: 13,

    },
    boxtextarea: {
        height: 82
    },
    textarea: {
        width: 256,
        height: 55,
        marginBottom: 13,
        outline: 'none',
        resize: 'none'
    },
    select: {
        width: 250,
        height: 33,
        outline: 'none',
        marginRight: 20
    },
    disponible: {
        marginTop: 75,
        width: 250,
        height: 33,
        outline: 'none',
        marginBottom: 22


    },
    render: {
        position: 'absolute',
        top: 153,
        right: 105,
        listStyle: 'none'
    },
    list: {

    },
    imgPaper: {
        height: 290,
        borderRadius: 10,
        position: 'relative',
        top: 15,
        left: 15,

    },
    boxBtn: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 20,
        textAlign: 'center'
    },
    btn: {
        width: 100,
        height: 30,
        marginLeft: 10,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        textTransform: 'uppercase',
        fontWeight: '600',
        borderRadius: 3,
        transition: '0.3s ease-out',
        '&:hover': {
            background: "#ea5103",
            color: 'white',
        },
    },
    btnX: {
        marginLeft: 7,
        backgroundColor: 'transparent',
        border: 'none',
        color: '#fff',
        fontSize: 13,
        '&:hover': {
            color: 'red',
        },

    },
    error: {
        color: 'red',
        fontSize: 14,
        fontWeight: '600',
        position: 'relative',
        bottom: 13


    }


})