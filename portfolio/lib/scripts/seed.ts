import {seedGridItems} from "./seeders/seedGridItems";

async function run() {
    try {
        await seedGridItems()
        console.log('Toutes les tables ont été remplies')
    } catch (error) {
        console.error('Erreur pendant le seed :', error)
    }
}

run()
