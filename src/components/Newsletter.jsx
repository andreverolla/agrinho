import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';

function Newsletter () {
    const [email, setEmail] = useState('');
    const [authorized, setAuthorized] = useState(false);
    const [loading, setLoading] = useState(false); // Previne múltiplos envios
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Árabe

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validação do e-mail
        if (!email.trim()) {
        toast.error('O campo de e-mail é obrigatório.');
        return;
    }

        // Verificação do e-mail
        if (!emailRegex.test(email)) {
            toast.error("Por favor, insira um email válido.")
            return
        }

        // Verificação do checkbox
        if (!authorized) {
            toast.warn("Você precisa autorizar o envio de comunicações.")
            return
        }

        // Impede envios múltiplos
        if (loading) return;

        setLoading(true);

        try {
            // 'Enviando dados' :)
            
            toast.success('Inscrição realizada com sucesso!');
            setEmail('');
            setAuthorized(false);
        } catch (error) {
            console.error(error);
            toast.error('Erro ao enviar. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="newsletter" className="bg-sand py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <span className="uppercase text-sm text-earth bg-almond border border-simple-stroke px-4 py-1 rounded-md">newsletter</span>
                <h2 className="text-3xl md:text-4xl font-bold text-olive-800 my-4">
                    Receba conteúdos inéditos e novidades gratuitamente
                </h2>
                <p className="text-contrast text-lg mb-4">
                    Cadastre seu e-mail e fique por dentro das ações, eventos e histórias inspiradoras da nossa comunidade rural.
                </p>

                <form className="mb-4 flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="w-full sm:w-auto text-contrast px-6 py-4 rounded-lg border placeholder:text-earth border-earth focus:border-olive-600 focus:text-olive-800 focus:outline-none focus:ring focus:ring-olive-600 transition"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`${ loading ? "cursor-not-allowed bg-olive-500" : "bg-olive-600 hover:bg-olive-700"} text-white font-medium px-6 py-4 rounded-lg transition cursor-pointer outline-none`}
                >
                    {loading ? 'Enviando...' : 'Inscrever-se'}
                </button>
                </form>

                <div className='flex items-start gap-2 mb-4'>
                    <input 
                        type="checkbox" 
                        name="check" 
                        id="auth"
                        checked={authorized} 
                        onChange={() => setAuthorized(!authorized)}
                        className="peer hidden" 

                    />
                    <label htmlFor="auth" className='absolute w-4 h-4 border border-olive-600 rounded-sm cursor-pointer mt-[2px] flex items-center justify-center peer-checked:bg-olive-600 transition-colors text-transparent peer-checked:text-white'><FontAwesomeIcon icon={faCheck} className='text-[9px]' /></label>
                    <p className="text-sm text-olive-700 relative left-5">
                        Autorizo o envio de comunicações por e-mail ou qualquer outro meio e concordo com os{' '}
                        <a href="#" className="underline">Termos e Políticas de privacidade.</a>
                    </p>
                </div>
            </div>

            <ToastContainer />
        </section>
    )
}

export default Newsletter