function Specialisation() {
    return (
        <section id="specialisation" className="bg-gray-100">
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold mb-4">Specialisation</h2>
                <p className="mb-4">Here are some things that I am having more experiences to help you solve your problems</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">Payment System</h3>
                        <p>Need assistance in integrating your business to online payment ecosystem? Let me handle it</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">Identity Management</h3>
                        <p>Why bother managing user authentication, authorization, or provisioning. Your resources need to be focused on your business core values</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">Web Application</h3>
                        <p>You just need web applications that both modern and works</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specialisation;