import useGlobalReducer from "../hooks/useGlobalReducer"

export const Card = ({ contact }) => {

    return (

        <div className="card">
            <div className="card-header">{contact.name}</div>
            <div className="card-body">{contact.phone}</div>
        </div>

    )
}