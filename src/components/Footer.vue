<script setup>
import Discord from './icons/Discord.vue';
import Mail from './icons/Mail.vue';
import X from './icons/X.vue';

</script>

<template>
    <div class="footer">
        <div class="contact">

            <span>For any questions or business inquiries, please feel free to contact me through the following
                options:</span>
            <div>

                <div class="contact-info">
                    <X />
                    <span>@f0xg4mer</span>
                </div>

                <div class="contact-info">
                    <Mail />
                    <span>management@f0xg4mer.com</span>
                </div>
                <div class="contact-info">
                    <Discord />
                    <span>@f0xg4mer</span>
                </div>
            </div>
        </div>
        <div>
            <hr></hr>
            <p class="copyright-info">Copyright &#169; 2025 F0xG4mer &#8226; All Rights Reserved</p>
        </div>
    </div>
</template>

<style>
.footer {
    width: 100vw;
    height: 320px;
    bottom: 0;
    backdrop-filter: brightness(0.5);
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.contact {
    text-align: center;
    width: 960px;
}

.contact div {
    padding: 1.25rem;
    display: flex;
    justify-content: center;
}

.contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.contact-info:hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(221, 184, 255);
}
</style>