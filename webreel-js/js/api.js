const WeatherAPI = {
    key: '914621240386ee561611df650c6ad4e2',
    city: 'Barcelona',
    async getData() {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=914621240386ee561611df650c6ad4e2&units=metric&lang=es`;
            const response = await fetch(url);
            
            if (!response.ok) {
                console.error("No carga");
                return null;
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error en la petición fetch:", error);
            return null;
        }
    }
};