import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FR, DE, IT, ES, GB } from 'country-flag-icons/react/3x2';
import { AuthContext } from '../../contexts/AuthContext';

const competitions = [
    { name: 'England', description: 'Premier League', to: '#', icon: GB },
    { name: 'Spain', description: 'LaLiga', to: '#', icon: ES },
    { name: 'Italy', description: 'Serie A', to: '#', icon: IT },
    { name: 'Germany', description: 'Bundesliga', to: '#', icon: DE },
    { name: 'France', description: 'Ligue 1', to: '#', icon: FR },
];

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only"></span>
                        <img alt="" src="/images/logo.png" className="h-8 w-auto" />
                    </Link>
                </div>

                <PopoverGroup className="flex gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Competitions
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {competitions.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link to={item.to} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link to="/forum" className="text-sm font-semibold leading-6 text-gray-900">
                        Forum
                    </Link>
                    <Link to="/aboutus" className="text-sm font-semibold leading-6 text-gray-900">
                        About us
                    </Link>
                </PopoverGroup>
                {!isAuthenticated
                    ? (

                        <div className="flex flex-1 justify-end">
                            <Link to="login" className="text-sm font-semibold leading-6 text-gray-900 mr-4">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    )
                    : (
                        <div className="flex flex-1 justify-end">
                            <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Log out <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}
