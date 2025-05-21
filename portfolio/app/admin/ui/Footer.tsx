export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4 border-t">
            &copy; {new Date().getFullYear()} Mon Application. Tous droits réservés.
        </footer>
    );
}
