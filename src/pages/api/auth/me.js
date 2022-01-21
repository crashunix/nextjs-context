const delay = (ammount = 750) => new Promise(resolve => setTimeout(resolve, ammount));

export default async (req, res) => {
    await delay();
    return res.status(200).json({
        user: {
            name: 'Juan Gomes Macário',
            email: 'jgomesmacario@gmail.com',
            avatar: 'https://github.com/crashunix.png',
        }
    });
}
