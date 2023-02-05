
export const ProfilePage = () => {

    const token = localStorage.getItem('token') 

    return (
        <>

        {!token ? (<h1>Доступ закрыт </h1>) : <h1>Профиль </h1>}
      
         
            
        </>
    )
}