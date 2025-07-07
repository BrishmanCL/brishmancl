type WrapperProps = {
    children: React.ReactNode;
    className?: string;
}

export default function Wrapper({ children, className}: WrapperProps) {
    return (
        <div className={`mx-4 sm:mx-8 md:mx-10 xl:mx-36 2xl:mx-96 ${className}`}>
            {children}
        </div>
    );
}