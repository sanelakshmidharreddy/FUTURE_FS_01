import { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import { Linkedin, Github, Loader2 } from 'lucide-react';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null);

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const messageText = formData.get('message') as string;

        // Simple validation
        if (!name || !email || !messageText) {
            setMessage({ text: "Please fill in all fields.", type: 'error' });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage({ text: "Please enter a valid email address.", type: 'error' });
            return;
        }

        setLoading(true);

        try {
            emailjs.init('PIRLSdxNMnaqw39Nz');
            await emailjs.sendForm(
                'service_qwlz2ix',
                'template_736diup',
                formRef.current,
                'PIRLSdxNMnaqw39Nz'
            );
            setMessage({ text: "Message sent successfully 🚀", type: 'success' });
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setMessage({ text: "Failed to send message. Please try again later.", type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-20 px-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-foreground">Contact Me</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mb-10">
                <Input name="name" placeholder="Your Name" />
                <Input name="email" placeholder="Your Email" type="email" />
                <Textarea name="message" placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {loading ? "Sending..." : "Send Message"}
                </Button>
                {message && (
                    <p className={`text-sm mt-2 ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                        {message.text}
                    </p>
                )}
            </form>
            
            <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                    <a href="https://github.com/sanelakshmidharreddy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Github size={24} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/sanelakshmidhar-reddy-943b62318" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Linkedin size={24} /> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};
