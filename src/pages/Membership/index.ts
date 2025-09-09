import { useMembershipSettings } from '@/lib/hooks/useMembershipSettings';
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'

export default function Membership(DOM: HTMLElement) {
    useTSMetaData({
        name: 'Membership Page - Inquiries',
        description: '',
        author: ''
    });

    const ui = useTSElements(
        DOM,
        html`
        <div class="py-8">
            <div class="max-w-screen-2xl mx-auto">
                <div id="member-hero"></div>
            </div>
        </div>
        `
    );

    useMembershipSettings(DOM)

    return ui
}