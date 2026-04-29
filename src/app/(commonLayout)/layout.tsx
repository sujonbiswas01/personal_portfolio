const CommonLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="max-w-[1480px] mx-auto">
            {children}
        </div>
    );
};

export default CommonLayout