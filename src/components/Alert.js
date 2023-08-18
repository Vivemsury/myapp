import React from 'react'

export default function Alert(props) {
    const capitilize = (word) => {
        const lowercase = word.toLowerCase();
        return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);

    }
    return (
        // ahi props.alert && aaetla mate lakhiyu 6 ke props ni value null thi start thay 6 aetale aano meaning ae thay 6 ke props.alert null hoy to && pachhi nu kai pan return ni thase and props.alert null na hoy to && pachhi nu badhu return thase
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitilize(props.alert.type)}</strong>:{props.alert.msg}

        </div>


    )
}
