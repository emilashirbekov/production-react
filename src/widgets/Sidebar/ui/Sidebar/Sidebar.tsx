import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import Toggle from 'shared/assets/icons/toggle.svg';
import Home from 'shared/assets/icons/Icon.svg';
import About from 'shared/assets/icons/export.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? <Toggle /> : <Toggle />}
            </Button>
            <div className={cls.items}>
                <div className={cls.item}>
                    <Home className={cls.icon} />
                    <AppLink
                        className={cls.link}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        {t('Главная')}
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <About className={cls.icon} />
                    <AppLink
                        className={cls.link}
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                    >
                        {t('О сайте')}
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
