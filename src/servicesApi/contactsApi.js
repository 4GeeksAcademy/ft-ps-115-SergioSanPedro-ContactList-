
export const getContacts = async () => {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/sergio90/contacts')

    if (!response.ok) {
        createAgenda()

    }
    const data = await response.json()

    return data.contacts
    
}


const createAgenda = async () => {
    await fetch('https://playground.4geeks.com/contact/agendas/sergio90', {
        method: 'POST'
    })

}