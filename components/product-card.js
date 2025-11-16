class ProductCard extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });

        const name = this.getAttribute('name') || 'Product';
        const price = Number(this.getAttribute('price')) || 0;
        const image = this.getAttribute('image') || 'https://placehold.co/120x120?text=Product';
        const desc = this.getAttribute('desc') || '';

        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    display: flex;
                    align-items: center;
                    background: #1a1a1a;
                    padding: 12px;
                    border-radius: 8px;
                    margin-bottom: 8px;

                    /* AWALNYA: sedikit turun & transparan */
                    opacity: 0;
                    transform: translateY(12px);

                    /* Durasi animasi 1.5 detik & delay 1 detik */
                    transition:
                        opacity 1.5s ease 1s,
                        transform 2s ease 1s;
                }

                /* Kalau host dapat class .visible → animasi fade-in + naik */
                :host(.visible) .product-card {
                    opacity: 1;
                    transform: translateY(0);
                }

                .product-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
                }

                .product-image {
                    width: 50px;
                    height: 50px;
                    border-radius: 8px;
                    object-fit: cover;
                    margin-right: 12px;
                }

                .product-info {
                    flex: 1;
                }

                .product-name {
                    font-weight: 600;
                    margin-bottom: 2px;
                }

                .product-price {
                    font-size: 14px;
                    color: #a855f7;
                }

                .product-desc {
                    font-size: 11px;
                    color: #9ca3af;
                    margin-top: 4px;
                }

                .buy-btn {
                    background: #805ad5;
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                }

                .buy-btn:hover {
                    background: #6b46c1;
                }
            </style>
            <div class="product-card">
                <img src="${image}" alt="${name}" class="product-image">
                <div class="product-info">
                    <div class="product-name">${name}</div>
                    <div class="product-price">Rp ${price.toLocaleString('id-ID')}</div>
                    ${desc ? '<div class="product-desc">' + desc + '</div>' : ''}
                </div>
                <button class="buy-btn">Buy Now</button>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);
