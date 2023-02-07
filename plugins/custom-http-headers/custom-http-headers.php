<?php

namespace Grav\Plugin;

use Composer\Autoload\ClassLoader;
use Grav\Common\Debugger;
use Grav\Common\Page\Interfaces\PageInterface;
use Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;

/**
 * Class CustomHTTPHeadersPlugin
 * @package Grav\Plugin
 */
class CustomHTTPHeadersPlugin extends Plugin
{
    /**
     * @return array
     *
     * The getSubscribedEvents() gives the core a list of events
     *     that the plugin wants to listen to. The key of each
     *     array section is the event that the plugin listens to
     *     and the value (in the form of an array) contains the
     *     callable (or function) as well as the priority. The
     *     higher the number the higher the priority.
     */
    public static function getSubscribedEvents(): array
    {
        return [
            'onPluginsInitialized' => [
                ['onPluginsInitialized', 0]
            ],
        ];
    }

    /**
     * Composer autoload
     *
     * @return ClassLoader
     */
    public function autoload(): ClassLoader
    {
        return require __DIR__ . '/vendor/autoload.php';
    }

    /**
     * Initialize the plugin
     */
    public function onPluginsInitialized(): void
    {
        $config = $this->config->get('plugins.custom-http-headers');

        if ($this->isAdmin() && !$config['enabled_in_admin']) {
            return;
        } else {
            $this->enable([
                'onPageInitialized' => [
                    ['onPageInitialized', 0]
                ]
            ]);
        }
    }

    public function onPageInitialized(): void
    {
        $config = (array)$this->config->get('plugins.custom-http-headers');

        $custom_headers = $config['custom_headers'] ?? [];
        $remove_headers = $config['remove_headers'] ?? [];
        foreach ($custom_headers as $header => $value) {
            header("$header: $value");
        }

        foreach ($remove_headers as $header) {
            header_remove($header);
        }

        /** @var PageInterface $page */
        $page = $this->grav['page'];
        if (isset($page->header()->custom_http_headers)) {
            $page_config = $page->header()->custom_http_headers;

            $custom_headers = $page_config['custom_headers'] ?? [];
            $remove_headers = $page_config['remove_headers'] ?? [];
            foreach ($custom_headers as $header => $value) {
                header("$header: $value");
            }

            foreach ($remove_headers as $header) {
                header_remove($header);
            }
        }

        if ($config['debug_headers']) {
            $this->grav['debugger']->addMessage(headers_list(), 'http-headers');
        }
    }
}
