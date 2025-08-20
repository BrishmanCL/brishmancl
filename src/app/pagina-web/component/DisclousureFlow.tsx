'use client'

import { useState, Children, cloneElement, isValidElement } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

type HorizontalAccordionProps = {
    children: React.ReactNode;
};

type HorizontalAccordionItemProps = {
    index: number;
    iconClosed?: React.ReactNode;
    iconOpen?: React.ReactNode;
    label: string;
    children: React.ReactNode;
    isActive?: boolean;
    onToggle?: () => void;
};

export function HorizontalAccordion({ children }: HorizontalAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0); // primer tab activo

    return (
        <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden h-auto md:h-[420px]">
            {Children.map(children, (child, index) => {
                if (isValidElement(child)) {
                    return cloneElement(child, {
                        index,
                        isActive: activeIndex === index,
                        onToggle: () =>
                            setActiveIndex(activeIndex === index ? null : index),
                    } as Partial<HorizontalAccordionItemProps>);
                }
                return child;
            })}
        </div>
    );
}

export function HorizontalAccordionItem({
    iconClosed,
    iconOpen,
    label,
    children,
    isActive = false,
    onToggle,
}: HorizontalAccordionItemProps) {
    return (
        <Disclosure as="div" className="flex flex-col md:flex-row border md:border-none">
            {() => (
                <>
                    {/* Botón */}
                    <DisclosureButton
                        onClick={onToggle}
                        className="flex flex-row md:flex-col justify-between items-center 
                                   w-full md:w-[65px] py-3 px-4 md:px-0 
                                   bg-[#003697] text-white"
                    >
                        <span className="whitespace-nowrap md:rotate-90 md:w-8 md:translate-y-10 
                                         text-lg md:text-2xl font-semibold">
                            {label}
                        </span>
                        <div className="transition-transform duration-300">
                            {isActive ? iconOpen : iconClosed}
                        </div>
                    </DisclosureButton>

                    {/* Panel */}
                    <DisclosurePanel
                        static
                        className={`bg-white text-sm text-gray-700 overflow-hidden 
                                    transition-all duration-500 ease-in-out
                                    ${isActive
                                ? "max-h-[690px] md:max-h-none max-w-full p-4 opacity-100"
                                : "max-h-0 md:w-0 p-0 opacity-0"}
                                    flex-1`}
                    >
                        {children}
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
