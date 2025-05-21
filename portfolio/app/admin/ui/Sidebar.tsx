export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-100 p-4 border-r border-gray-200 min-h-[calc(100vh-64px)]">
            <ul className="space-y-2">
                <li><a href="#" className="block text-gray-700 hover:text-blue-500">Dashboard</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-blue-500">Projects</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-blue-500">Users</a></li>
                <li><a href="#" className="block text-gray-700 hover:text-blue-500">Settings</a></li>
            </ul>
        </aside>
    );
}
