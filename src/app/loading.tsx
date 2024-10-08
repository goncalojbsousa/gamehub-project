'use client';

import { Footer } from '@/src/components/footer';
import { Navbar } from '@/src/components/navbar/navbar';
import React from 'react';
import { LoadingPage } from '@/src/components/svg/loading-page';

const Loading: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <LoadingPage className="fill-color_icons" />
            </div>
            <Footer />
        </div>
    );
};

export default Loading;
