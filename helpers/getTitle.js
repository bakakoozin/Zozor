export async function getTitle() {
    try {
        const res = await fetch('http://localhost:5000')
        const resJson = await res.json()
        
        document.getElementById('helloWorldText').textContent = resJson.message
    } catch (e) {
        console.error('Erreur lors de la requête fetch :', error)
    }
}